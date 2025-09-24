import json
import psycopg2
from pathlib import Path

# Conexão com o Postgres
conn = psycopg2.connect(
    dbname="postgres",
    user="isacgama",
    password="D1asgama1sac",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

# Lê o JSON
with open("sapatos.json", "r", encoding="utf-8") as f:
    produtos = json.load(f)

for p in produtos:
    # Inserir produto
    cur.execute("""
        INSERT INTO "Produto" (nome, tipo, cor, stars, "qtdEstoque", "qtdVendido", "qtdAvaliacao", descricao)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING id
    """, (p["nome"], p.get("tipo"), p.get("cor"), p.get("stars"),
          p["qtdEstoque"], p["qtdVendido"], p["qtdAvaliacao"], p.get("descricao")))
    produto_id = cur.fetchone()[0]

    # Inserir preço
    preco = p["preco"]
    cur.execute("""
        INSERT INTO "Preco" ("semDesconto", "aVista", "produtoId")
        VALUES (%s, %s, %s)
        RETURNING id
    """, (preco["semDesconto"], preco["aVista"], produto_id))
    preco_id = cur.fetchone()[0]

    # Parcelamentos
    for parc in preco["parcelado"]:
        cur.execute("""
            INSERT INTO "Parcelamento" (parcelas, valor, "precoId")
            VALUES (%s, %s, %s)
        """, (parc["parcelas"], parc["valor"], preco_id))

    # Imagens (lendo os arquivos da pasta public)
    for img_path in p["imagens"]:
        full_path = Path("public") / Path(img_path.lstrip("/"))
        with open(full_path, "rb") as img_file:
            img_bytes = img_file.read()
            cur.execute("""
                INSERT INTO "Imagem" (data, "produtoId")
                VALUES (%s, %s)
            """, (psycopg2.Binary(img_bytes), produto_id))

    # Tamanhos
    for t in p["tamanhos"]:
        cur.execute("""
            INSERT INTO "Tamanho" (numero, "produtoId")
            VALUES (%s, %s)
        """, (t, produto_id))

conn.commit()
cur.close()
conn.close()

print("Importação concluída com sucesso!")
