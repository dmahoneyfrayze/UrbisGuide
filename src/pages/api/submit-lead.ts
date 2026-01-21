export const prerender = false; // Ensure this runs on the server (SSR)

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        // Log raw input
        console.log('API received raw:', JSON.stringify(data));

        const { email, source, guests, room_width, room_length } = data;

        // Transform and Cast Data to ensure Numbers are Numbers
        const payload = {
            email,
            source: source || 'Urbis Guide Table Sizing Tool',
            guests: Number(guests) || 6, // Default fallback if missing
            room_width: Number(room_width),
            room_length: Number(room_length)
        };

        // Log the actual payload being sent
        console.log('Sending payload to webhook:', JSON.stringify(payload));

        const response = await fetch('https://services.leadconnectorhq.com/hooks/Z9Vg8cf0Zm8TE2uP4PHd/webhook-trigger/2efa5f24-9fc3-466e-828c-7df11a9c6ee4', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Webhook Failed:', response.status, errorText);
            // Include the error details in the response to the client
            return new Response(JSON.stringify({ message: 'Webhook failed', details: errorText }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ message: 'Success' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
