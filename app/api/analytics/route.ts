import { analyticsEvents } from "../../../db/schema";
import { getDb } from "../../../db";

const allowedEvents = new Set(["page_view", "case_open", "whatsapp_click", "instagram_click"]);
const allowedDevices = new Set(["mobile", "tablet", "desktop"]);

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (origin && new URL(origin).host !== new URL(request.url).host) return new Response(null, { status: 403 });
    const payload = await request.json() as Record<string, unknown>;
    const event = String(payload.event ?? "").slice(0, 40);
    const sessionId = String(payload.sessionId ?? "").slice(0, 80);
    if (!allowedEvents.has(event) || !sessionId) return new Response(null, { status: 400 });
    const device = String(payload.device ?? "desktop");
    await getDb().insert(analyticsEvents).values({
      event,
      sessionId,
      label: String(payload.label ?? "").slice(0, 100),
      path: String(payload.path ?? "/").slice(0, 160),
      referrer: String(payload.referrer ?? "direct").slice(0, 120),
      device: allowedDevices.has(device) ? device : "desktop",
    });
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 500 });
  }
}

