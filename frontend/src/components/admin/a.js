<label>Kategori 1:</label>
                  <div class="btn-group">
                    <input
                      type="radio"
                      class="btn-check"
                      name="kategori_1"
                      id="option1"
                      autoComplete="off"
                      checked={formData.kategori_1 === 'Jawa'}
                      onChange={handleInputChange}
                      value="Jawa"
                    />
                    <label class="btn btn-secondary" for="option1" data-mdb-ripple-init>
                      Jawa
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="kategori_1"
                      id="option2"
                      autoComplete="off"
                      checked={formData.kategori_1 === 'Kalimantan'}
                      onChange={handleInputChange}
                      value="Kalimantan"
                    />
                    <label class="btn btn-secondary" for="option2" data-mdb-ripple-init>
                      Kalimantan
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="kategori_1"
                      id="option3"
                      autoComplete="off"
                      checked={formData.kategori_1 === 'Papua'}
                      onChange={handleInputChange}
                      value="Papua"
                    />
                    <label class="btn btn-secondary" for="option3" data-mdb-ripple-init>
                      Papua
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="kategori_1"
                      id="option4"
                      autoComplete="off"
                      checked={formData.kategori_1 === 'Sumatera'}
                      onChange={handleInputChange}
                      value="Sumatera"
                    />
                    <label class="btn btn-secondary" for="option4" data-mdb-ripple-init>
                      Sumatera
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="kategori_1"
                      id="option5"
                      autoComplete="off"
                      checked={formData.kategori_1 === 'Sulawesi'}
                      onChange={handleInputChange}
                      value="Sulawesi"
                    />
                    <label class="btn btn-secondary" for="option5" data-mdb-ripple-init>
                      Sulawesi
                    </label>
                  </div>