document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const exerciseName = document.getElementById('exerciseName').value;
    const exerciseReps = parseInt(document.getElementById('exerciseReps').value, 10);

    const messageElement = document.getElementById('message');

    try {
        validarNomeExercicio(exerciseName);
        validarRepeticoes(exerciseReps);

        adicionarExercicio(exerciseName, exerciseReps);

        document.getElementById('exerciseForm').reset();
        exibirMensagem('Exercício adicionado com sucesso!', 'success');
    } catch (error) {
        exibirMensagem('Erro: ' + error.message, 'error');
    }
});

function validarNomeExercicio(nome) {
    if (nome.trim() === '') {
        throw new Error('O nome do exercício não pode estar vazio.');
    }
}

function validarRepeticoes(reps) {
    if (isNaN(reps) || reps <= 0) {
        throw new Error('As repetições devem ser um número positivo.');
    }
}

function adicionarExercicio(nome, reps) {
    const exerciseList = document.getElementById('exerciseList');
    const listItem = document.createElement('li');
    listItem.textContent = `${nome} - ${reps} repetições`;
    exerciseList.appendChild(listItem);
}

function exibirMensagem(mensagem, tipo) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = mensagem;
    messageElement.className = 'message ' + tipo;
}

