//importando alguns types do Angular
//Pipe decorator function
//Define o formato de todos os Pipes em Angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    //keyword que iremos usar na marcação html
    name: 'summary'
})

//exportando uma classe TS
export class SummaryPipe implements PipeTransform {
    //Esse implements diz que essa classe tem que ter exatamente o formato que a
    // interface do PipeTransform 
    // ir para Angular.io e digitar PipeTransform
    //método transform
    transform(value: string, limit?: number) {
        //validaçãio básica
        if (!value)
            return null;

        let actualLimit = (limit) ? limit : 50;
        return value.substring(0., actualLimit) + '...';
    }

}