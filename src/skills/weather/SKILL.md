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
Weather report: Shanghai, China

   \   /     Sunny
    .-.     28-32°C  ↑
  (   )   ↓ 10 km
   "-"   3 km
  /   \   1 m/s
```

JSON format:
```json
{
  "weather": "Sunny",
  "temperature": "28-32°C",
  "wind": "1 m/s",
  ...
}
```
