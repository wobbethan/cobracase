import { notFound } from "next/navigation";
import config from "../../../../tailwind.config";
import { db } from "@/db";
import DesignPreview from "@/components/DesignPreview";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({ where: { id } });
  if (!configuration) return notFound();

  return <DesignPreview configuration={configuration} />;
};

export default page;
