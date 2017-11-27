// Criando um serviço para alocar minha lista de cursos
export class CoursesService {
    //método para buscar a lista de cursos
    array = [{
        'curso1': 'portugues',
        'curso2': 'portugues',
        'curso3': 'portugues',
        'curso4': 'portugues',
        'curso5': 'portugues',
        'curso6': 'portugues',
        'curso7': 'portugues',
    }]

    getCourses() {
        return this.array;
    }
}