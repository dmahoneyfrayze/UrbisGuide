export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    console.log("API received raw:", JSON.stringify(data));
    const { email, source, guests, room_width, room_length } = data;
    const payload = {
      email,
      source: source || "Urbis Guide Table Sizing Tool",
      guests: Number(guests) || 6,
      // Default fallback if missing
      room_width: Number(room_width),
      room_length: Number(room_length)
    };
    console.log("Sending payload to webhook:", JSON.stringify(payload));
    const response = await fetch("https://services.leadconnectorhq.com/hooks/Z9Vg8cf0Zm8TE2uP4PHd/webhook-trigger/2efa5f24-9fc3-466e-828c-7df11a9c6ee4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Webhook Failed:", response.status, errorText);
      return new Response(JSON.stringify({ message: "Webhook failed", details: errorText }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
