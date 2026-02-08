#!/usr/bin/env node
/**
 * Weather Script
 * Gets current weather using wttr.in (no API key required)
 */

import https from 'https';

/**
 * 获取天气数据
 */
function getWeather(location, options = {}) {
  return new Promise((resolve) => {
    const format = options.format || 'text';
    const url = `https://wttr.in/${encodeURIComponent(location)}?format=${format === 'json' ? 'j1' : '%C+%t+%w+%m'}`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          if (format === 'json') {
            try {
              const weather = JSON.parse(data);
              const output = formatWeatherJson(weather);
              resolve({ success: true, output });
            } catch (e) {
              resolve({ success: true, output: data });
            }
          } else {
            resolve({ success: true, output: data });
          }
        } else {
          resolve({
            success: false,
            output: '',
            error: `Failed to fetch weather: HTTP ${res.statusCode}`,
          });
        }
      });
    }).on('error', (err) => {
      resolve({
        success: false,
        output: '',
        error: err.message,
      });
    });
  });
}

/**
 * 格式化 JSON 天气数据
 */
function formatWeatherJson(weather) {
  const current = weather.current_condition?.[0];
  if (!current) {
    return JSON.stringify(weather, null, 2);
  }

  return `
Weather Report for ${weather.nearest_area?.[0]?.areaName?.[0]?.value || 'Unknown'}

Temperature: ${current.temp_C}°C (${current.temp_F}°F)
Humidity: ${current.humidity}%
Wind: ${current.windspeed} km/h ${current.winddir16point}
Weather: ${current.weatherDesc?.[0]?.value || 'Unknown'}
Feels Like: ${current.FeelsLikeC}°C
`;
}

/**
 * 解析命令行参数
 */
function parseArgs(args) {
  let location = '';
  const options = {};

  for (const arg of args) {
    if (arg.startsWith('--format=')) {
      const format = arg.split('=')[1];
      if (format === 'json' || format === 'text') {
        options.format = format;
      }
    } else if (!arg.startsWith('-')) {
      location = arg;
    }
  }

  return { location, options };
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Weather Skill - Get current weather

Usage:
  weather <location> [options]

Options:
  --format=json    Output in JSON format
  --format=text    Output in text format (default)

Examples:
  weather Beijing
  weather Shanghai --format=json
  weather "New York" --format=text
`);
    process.exit(0);
  }

  const { location, options } = parseArgs(args);

  if (!location) {
    console.error('Error: Location is required');
    process.exit(1);
  }

  console.log(`Fetching weather for: ${location}`);
  
  const result = await getWeather(location, options);

  if (result.success) {
    console.log(result.output);
    process.exit(0);
  } else {
    console.error(`Error: ${result.error}`);
    process.exit(1);
  }
}

main();
