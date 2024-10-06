const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Forward the request to Swiggy's API
app.use(express.json());

app.post("/api/restaurants", async (req, res) => {
  console.log(req.body);
  try {
    // Extract the necessary request payload from the frontend
    const {
      filters,
      lat,
      lng,
      nextOffset,
      page_type,
      seoParams,
      widgetOffset,
      _csrf,
    } = req.body;

    // Forward request to Swiggy's API using axios
    const response = await axios.post(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        filters,
        lat,
        lng,
        nextOffset,
        page_type,
        seoParams,
        widgetOffset,
        _csrf,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Origin: "https://www.swiggy.com",
          Referer: "https://www.swiggy.com/",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
          Cookie: "__SW=vd-27xj8hp0IAGemv4BxgEi7bmNFT9Df; ...",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
        },
      }
    );

    // Send back the Swiggy API response to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error forwarding request:", error.message);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
