public class VisitorPatterDemo {
    public static void main(String[] args){

        ComputerPart computer = new Computer();
        computer.accept(new ComputerPartDisplayVisitor());
    }
    
}
