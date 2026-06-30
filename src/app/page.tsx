import { getAllSectionsHtml } from "../services/product.service";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const result = await getAllSectionsHtml();
  const html: string = result?.data ?? "";

  if (!html) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p>No homepage sections found.</p>
      </div>
    );
  }

  return (
    <main dangerouslySetInnerHTML={{ __html: html }} />
  );
}
