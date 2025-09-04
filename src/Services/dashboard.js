// api.js
export async function fetchWithAuth(url) {
  const token = localStorage.getItem("authToken");
  if (!token) throw new Error("No auth token found");

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return response.json();
}
