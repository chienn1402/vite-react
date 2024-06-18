/**
 * Safely parse JSON format
 * @param jsonString input json string
 * @returns data in json format or undefined
 */
export const parseJSON = <T>(jsonString: string | null): T | null => {
  try {
    return jsonString === 'undefined' ? null : JSON.parse(jsonString ?? '');
  } catch (error) {
    console.log('Parsing error on ', { jsonString });
    return null;
  }
};
