import "./global.css";
import { Card, CardHeader, CardBody, Snippet } from "@nextui-org/react";
import { NODE_ENV } from "@/envParams";
import { Providers } from "../providers";

export default function RootLayout({
  title,
  content,
}: {
  title: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Snippet
            hideCopyButton
            variant="solid"
            color="primary"
            className="absolute bottom-1 left-1"
          >{`current NODE_ENV=${NODE_ENV}, Any operations here won't affect production environment`}</Snippet>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96">
            <Card>
              <CardHeader>{title}</CardHeader>
              <CardBody>{content}</CardBody>
            </Card>
          </div>
        </Providers>
      </body>
    </html>
  );
}
