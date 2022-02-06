import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'heroeFly'
})
export class HeroeFly implements PipeTransform{
    transform(value: boolean) {
        return (value)? "fly":"walks";
    }
}