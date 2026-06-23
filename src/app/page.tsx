export default async function DemoPage() {
    const payload = { "diamond_type": 1,
         "center_stone_shape": 1,
         "side_diamond_color": 1,
         "side_diamond_clarity": 1,
         "head": 59,
         "shank": 1,
         "side_setting": 1,
         "center_stone_size": 1,
         "metal": 1,
         "karat": 9,
         "is_band": 0,
         "id_head_metal_tone": 1,
         "id_shank_metal_tone": 1,
         "id_band_metal_tone": null,
         "currency": "INR" }

    const response = await fetch(
        `${process.env.BACKEND_URL}/v4/user/api/configurator?company_key=${process.env.COMPANY_KEY}`,
        {
            method: "POST",
            
            body: JSON.stringify(payload),
            
            headers: {
                authorization: `${process.env.PUBLIC_AUTHORIZATION_TOKEN}`,
                
                "Content-Type": "application/json",
            },
        }
    );

    const data = await response.json();
    console.log("DemoPage data:", data);
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: data.html,
            }}
        />
    );

}