export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar producto</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>
        <div>
          <label>Categoria</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div>
          <label>Descripcion:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
          <label>Intensidad:</label>
          <select
            name="intensidad"
            value={product.intensidad}
            onChange={onChange}
          >
            <option value="">Seleccionar...</option>
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            <option value="Alto">Alto</option>
          </select>
          {errors.intensidad && <p className="error">{errors.intensidad}</p>}
        </div>

        <div>
          <label>Amargor:</label>
          <select name="amargor" value={product.amargor} onChange={onChange}>
            <option value="">Seleccionar...</option>
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            <option value="Alto">Alto</option>
          </select>
          {errors.amargor && <p className="error">{errors.amargor}</p>}
        </div>

        <div>
          <label>Origen</label>
          <input
            type="text"
            name="origen"
            value={product.origen}
            onChange={onChange}
          />
          {errors.origen && <p className="error">{errors.origen}</p>}
        </div>

        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={onChange}
          />
          {errors.stock && <p className="error">{errors.stock}</p>}
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};
