const USER_KEY = 'reshub_user';

export const auth = {
  login(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem(USER_KEY);
  },

  getUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  updateProfile(updates) {
    const user = this.getUser();
    if (user) {
      const merged = { ...user, ...updates };
      localStorage.setItem(USER_KEY, JSON.stringify(merged));
      return merged;
    }
    return null;
  },
};

export function createGuestUser(name, email) {
  return {
    name: name || '新用户',
    email: email || '',
    avatar: (name || '新')[0],
    role: '用户',
    bio: '',
    joinedAt: new Date().toISOString().slice(0, 10),
  };
}
