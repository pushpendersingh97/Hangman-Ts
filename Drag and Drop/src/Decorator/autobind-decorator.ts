
// Auto bind Constructor
export function autobind(
_1: any, 
_2: string,
descriptor: PropertyDescriptor
){
    const orginalMethod = descriptor.value;
    const adjDescriptor : PropertyDescriptor = {
        configurable:true,
        get(){
            const boundFn = orginalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
