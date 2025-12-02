// In dev, with Vite proxy set up, this can just be '/api'.
// For prod/deployment, set VITE_API_BASE_URL in an .env file (e.g. 'https://your-server.com/api').
const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

// Helper to handle JSON requests/responses + basic error handling
async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include', // if you use cookies/sessions
    ...options,
  });

  // Try to parse JSON if possible
  let data;
  const text = await res.text();
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    const message = data?.message || data || `Request failed with status ${res.status}`;
    throw new Error(message);
  }

  return data;
}

/* =========================
   Pets (/api/pets)
   ========================= */

export function getPets() {
  return request('/pets', { method: 'GET' });
}

export function getPetById(id) {
  return request(`/pets/${id}`, { method: 'GET' });
}

export function createPet(pet) {
  return request('/pets', {
    method: 'POST',
    body: JSON.stringify(pet),
  });
}

export function updatePet(id, pet) {
  return request(`/pets/${id}`, {
    method: 'PUT',
    body: JSON.stringify(pet),
  });
}

/* =========================
   Pet Owners (/api/pet-owners)
   ========================= */

export function getPetOwners() {
  return request('/pet-owners', { method: 'GET' });
}

export function getPetOwnerById(id) {
  return request(`/pet-owners/${id}`, { method: 'GET' });
}

export function createPetOwner(owner) {
  return request('/pet-owners', {
    method: 'POST',
    body: JSON.stringify(owner),
  });
}

export function updatePetOwner(id, owner) {
  return request(`/pet-owners/${id}`, {
    method: 'PUT',
    body: JSON.stringify(owner),
  });
}

/* =========================
   Breeder Profiles (/api/breeders or similar)
   ========================= */

// adjust the path to match your actual @RequestMapping in BreederProfileController
export function getBreeders() {
  return request('/breeders', { method: 'GET' });
}

export function getBreederById(id) {
  return request(`/breeders/${id}`, { method: 'GET' });
}

export function createBreeder(breeder) {
  return request('/breeders', {
    method: 'POST',
    body: JSON.stringify(breeder),
  });
}

export function updateBreeder(id, breeder) {
  return request(`/breeders/${id}`, {
    method: 'PUT',
    body: JSON.stringify(breeder),
  });
}

/* =========================
   Posts (/api/posts)
   ========================= */

export function getPosts() {
  return request('/posts', { method: 'GET' });
}

export function getPostById(id) {
  return request(`/posts/${id}`, { method: 'GET' });
}

export function createPost(post) {
  return request('/posts', {
    method: 'POST',
    body: JSON.stringify(post),
  });
}

export function updatePost(id, post) {
  return request(`/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
  });
}

/* =========================
   Pet Listings (/api/pet-listings)
   ========================= */

export function getPetListings() {
  return request('/pet-listings', { method: 'GET' });
}

export function getPetListingById(id) {
  return request(`/pet-listings/${id}`, { method: 'GET' });
}

export function createPetListing(listing) {
  return request('/pet-listings', {
    method: 'POST',
    body: JSON.stringify(listing),
  });
}

export function updatePetListing(id, listing) {
  return request(`/pet-listings/${id}`, {
    method: 'PUT',
    body: JSON.stringify(listing),
  });
}

export function deletePetListing(id) {
  return request(`/pet-listings/${id}`, { method: 'DELETE' });
}

/* =========================
   Transactions (/api/transactions)
   ========================= */

export function getTransactions() {
  return request('/transactions', { method: 'GET' });
}

export function getTransactionById(id) {
  return request(`/transactions/${id}`, { method: 'GET' });
}

export function createTransaction(tx) {
  return request('/transactions', {
    method: 'POST',
    body: JSON.stringify(tx),
  });
}

export function updateTransaction(id, tx) {
  return request(`/transactions/${id}`, {
    method: 'PUT',
    body: JSON.stringify(tx),
  });
}