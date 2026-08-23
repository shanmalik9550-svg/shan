const url = "https://srrcumjdmhccslkolwlv.supabase.co/rest/v1/visitor_ips";
const key = "sb_publishable_NYH2JMS6LwtOtrTvxnWgNg_3HkQQ_IO";

async function testSupabase() {
  try {
    const postRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": key,
        "Authorization": `Bearer ${key}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify({
        ip: "103.21.124.99",
        timestamp: "23/08/2026, 11:50 AM",
        path: "/friend-test-page",
        referrer: "whatsapp.com",
        is_ad_click: false
      })
    });
    console.log("POST status:", postRes.status, await postRes.text());

    const getRes = await fetch(url + "?select=*", {
      headers: {
        "apikey": key,
        "Authorization": `Bearer ${key}`
      }
    });
    console.log("GET status:", getRes.status, await getRes.json());
  } catch (err) {
    console.error("Error:", err);
  }
}

testSupabase();
