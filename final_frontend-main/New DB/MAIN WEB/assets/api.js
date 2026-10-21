const API_URL = 'http://localhost:8080/api/users';

// 1. Kumuha ng lahat ng users (Para sa Admin/Tenant Dashboards)
async function getUsers() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network error');
        return await response.json();
    } catch (error) {
        console.error("Error sa pagkuha ng users:", error);
        return [];
    }
}

// 2. Mag-save / Register ng bagong user (Para sa Login/Register Form)
async function createUser(userData) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) throw new Error('Failed to save user');
        return await response.json();
    } catch (error) {
        console.error("Error sa pag-save ng user:", error);
        return null;
    }
}