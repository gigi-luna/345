public class SingletonPatterDemo {
    public static void main(String[] args){
        SingleObject object = SingleObject.getInstance();

        object.showMessage();
    }
    
}
