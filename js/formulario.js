// Formulario compra 


$("#formulario-container").append(
`<form class="formulario-compra" id="formulario" name="formulario_compra"> 
    <legend> Complete los datos </legend>
    <div class="campo">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre">
    </div>
    <div class="campo">
        <label for="email">E-mail</label>
        <input type="email" id="email">
    </div>
    <div class="campo">
        <label for="numeroTarjeta">Número de la tarjeta</label>
        <input type="text" maxlength="19" id="numeroTarjeta" > 
    </div>
    <div class="flexbox-compra">
        <div class="grupo expira">
            <label for="selectMes">Expira</label>
            <div class="flexbox-compra">
                <div class="grupo-select">
                    <select name="mes" id="selectMes">
                        <option disabled selected>Mes</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div class="grupo-select">
                    <select name="año" id="selectAnio">
                        <option disabled selected>Año</option>
                        <option value="1">2021</option>
                        <option value="2">2022</option>
                        <option value="3">2023</option>
                        <option value="4">2024</option>
                        <option value="5">2025</option>
                        <option value="6">2026</option>
                    </select>
                </div>
            </div>
        </div> 
    </div>
    <div class="grupo-ccv">
        <label for="inputCCV">CCV</label>
        <input type="text" id="inputCCV" maxlength="3">
    </div>
    <button id="btn-enviar-formulario" class="boton-compra" type="submit" class="btn-enviar">Enviar</button>
</form>`)

$('#btn-enviar-formulario').click(function(e){
    e.preventDefault()
    Swal.fire(
        'Felicitaciones!',
        'Tu compra se ha realizado con éxito!',
        'success'
      )
});

