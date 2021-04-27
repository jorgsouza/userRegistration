import express from "express";

const app = express();
const port = 3333;

app.get("/", (request, response) => {
  return response.json({
    message: "Hello",
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "Data saved successfully",
  });
});

app.listen(port, () => console.log(`Server is running on the port: ${port}`));
