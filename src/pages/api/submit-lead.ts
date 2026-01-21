export const prerender = false; // Ensure this runs on the server (SSR)

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        // Log the incoming data for debugging (server-side)
        console.log('Received lead data:', JSON.stringify(data));

        const response = await fetch('https://services.leadconnectorhq.com/hooks/Z9Vg8cf0Zm8TE2uP4PHd/webhook-trigger/2efa5f24-9fc3-466e-828c-7df11a9c6ee4', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Webhook Failed:', response.status, errorText);
            return new Response(JSON.stringify({ message: 'Webhook failed', details: errorText }), {
                status: response.status,
            });
        }

        return new Response(JSON.stringify({ message: 'Success' }), {
            status: 200,
        });
    } catch (error) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
        });
    }
};
