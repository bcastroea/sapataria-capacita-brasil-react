const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

// Função para buscar produtos (agora com suporte a autenticação)
export async function getProdutos(token = null) {
  try {
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${REACT_APP_BASE_URL}/produtos/`, {
      headers,
    });
    if (!response.ok) {
      throw new Error("Erro ao carregar os produtos da API");
    }

    const produtos = await response.json();

    // Processar as imagens para incluir URLs completas
    return produtos.map((produto) => ({
      ...produto,
      imagens: produto.imagens
        ? produto.imagens.map((imagem) => ({
            ...imagem,
            url: `${REACT_APP_BASE_URL}/produtos/imagem/${imagem.id}`,
          }))
        : [],
    }));
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
}

// Função auxiliar para buscar uma imagem específica
export async function getImagemUrl(imagemId) {
  return `${REACT_APP_BASE_URL}/produtos/imagem/${imagemId}`;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const userApi = {
  async createUser(user, token) {
    const res = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erro ao criar usuário");
    return data;
  },

  async updateUser(id, user, token) {
    const res = await fetch(`${BASE_URL}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erro ao atualizar usuário");
    return data;
  },

  async deleteUser(id, token) {
    const res = await fetch(`${BASE_URL}/user/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || "Erro ao deletar usuário");
    }
    return true;
  },

  async getUsers(token) {
    const res = await fetch(`${BASE_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || "Erro ao buscar usuários");
    }
    return await res.json();
  },

  async getUserById(id, token) {
    const res = await fetch(`${BASE_URL}/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || "Erro ao buscar usuário");
    }
    return await res.json();
  },
};

export const productApi = {
  async getAllProdutos(token = null) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`${BASE_URL}/produtos`, { headers });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || "Erro ao buscar produtos");
    }

    const produtos = await res.json();
    return produtos.map((produto) => ({
      ...produto,
      imagens: produto.imagens
        ? produto.imagens.map((imagem) => ({
            ...imagem,
            url: `${BASE_URL}/produtos/imagem/${imagem.id}`,
          }))
        : [],
    }));
  },

  async createProduto(produto, token) {
    let options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: produto,
    };

    // Se for JSON comum, seta Content-Type
    if (!(produto instanceof FormData)) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(produto);
    }

    const res = await fetch(`${BASE_URL}/produtos`, options);

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Erro ao criar produto");
    }

    return {
      ...data,
      imagens: data.imagens
        ? data.imagens.map((img) => ({
            ...img,
            url: `${BASE_URL}/produtos/imagem/${img.id}`,
          }))
        : [],
    };
  },

  async updateProduto(id, produto, token) {
    let options = {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: produto,
    };

    // Se não for FormData, trata como JSON normal
    if (!(produto instanceof FormData)) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(produto);
    }

    const res = await fetch(`${BASE_URL}/produtos/${id}`, options);

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Erro ao atualizar produto");
    }

    return {
      ...data,
      imagens: data.imagens
        ? data.imagens.map((img) => ({
            ...img,
            url: `${BASE_URL}/produtos/imagem/${img.id}`,
          }))
        : [],
    };
  },

  async deleteProduto(id, token) {
    const res = await fetch(`${BASE_URL}/produtos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || "Erro ao deletar produto");
    }

    return true;
  },
};
