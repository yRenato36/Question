function clique() {
    var res = window.document.getElementById('resp')
    var p2 = window.document.getElementById('paragrafo2')
    var result = (res.value)
    if (result === 'manhã') {
        p2.innerHTML = 'Resposta correta. Parabéns'
    } else if (result === 'manha') {
        p2.innerHTML = 'Está faltando um acento'
    } else if (result != 'manhã') {
        p2.innerHTML = 'Resposta incorreta. Tente novamente'
    }
}