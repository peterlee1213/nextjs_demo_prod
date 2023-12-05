import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./global.css";
import { Card, CardHeader, CardContent } from "@mui/material";

export default function RootLayout({
  children,
  title,
  content,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96">
          <Card>
            <CardHeader
              sx={{ bgcolor: "primary.main", color: "white" }}
              title={title}
            ></CardHeader>
            <CardContent className="pb-0">{content}</CardContent>
          </Card>
        </div>
      </body>
    </html>
  );
}
