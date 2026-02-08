---
name: weather
description: Get current weather and forecasts (no API key required)
---

# Weather Skill

Get current weather and forecasts for any location. No API key required - uses wttr.in service.

## Usage

```bash
# Basic weather
<skill:weather>Beijing</skill>

# With specific format
<skill:weather>Shanghai --format=json</skill>
```

## Output Examples

Text format (default):
```
Weather Report for Shanghai

🌡️ Temperature: 28°C (82°F)
💧 Humidity: 65%
🌬️ Wind: 15 km/h SW
☁️ Weather: Partly Cloudy
🌅 Feels Like: 30°C
```

JSON format:
```json
{
  "weather": "Sunny",
  "temperature": "28°C",
  "humidity": "65%",
  "wind": "15 km/h"
}
```
