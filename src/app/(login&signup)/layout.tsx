import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./global.css";
import { Card, CardHeader, CardContent, Snackbar, Alert } from "@mui/material";
import { NODE_ENV } from "@/envParams";

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
        <Snackbar open={NODE_ENV !== "production"}>
          <Alert variant="filled" severity="info" sx={{ width: "100%" }}>
            {`current NODE_ENV=${NODE_ENV}, Any operations here won't affect production environment`}
          </Alert>
        </Snackbar>
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
