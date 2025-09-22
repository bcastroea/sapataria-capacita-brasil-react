const BASE_URL = process.env.REACT_APP_BASE_URL;

// Funções de autenticação
export const authApi = {
  async loginUser(email, senha) {
    try {
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao fazer login");
      }

      return data;
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  },
  // Login do cliente
  async login(email, senha) {
    try {
      const response = await fetch(`${BASE_URL}/clients/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao fazer login");
      }

      return data;
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  },

  // Cadastro de cliente
  async cadastro(nome, email, senha) {
    try {
      const response = await fetch(`${BASE_URL}/clients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao criar conta");
      }

      return data;
    } catch (error) {
      console.error("Erro no cadastro:", error);
      throw error;
    }
  },

  // Verificar token válido
  async verificarToken(token) {
    try {
      const response = await fetch(`${BASE_URL}/clients/verify`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.ok;
    } catch (error) {
      console.error("Erro ao verificar token:", error);
      return false;
    }
  },
};

// Funções de dados do cliente
export const clienteApi = {
  // Buscar dados do cliente
  async getCliente(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar dados do cliente");
      }

      return data;
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
      throw error;
    }
  },

  // Atualizar dados do cliente
  async updateCliente(id, dados, token) {
    try {
      const response = await fetch(`${BASE_URL}/clients/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dados),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao atualizar cliente");
      }

      return data;
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      throw error;
    }
  },

  // Deletar conta do cliente
  async deleteCliente(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/clients/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao deletar conta");
      }

      return true;
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      throw error;
    }
  },
};
