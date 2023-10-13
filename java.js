import java.util.ArrayList;
import java.util.Scanner;

public class DailyTaskManager {
    public static void main(String[] args) {
        ArrayList<String> tasks = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Daily Task Manager");
            System.out.println("1. List tasks");
            System.out.println("2. Add a new task");
            System.out.println("3. Remove a completed task");
            System.out.println("4. Quit");

            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    listTasks(tasks);
                    break;
                case 2:
                    addTask(scanner, tasks);
                    break;
                case 3:
                    removeTask(scanner, tasks);
                    break;
                case 4:
                    System.out.println("Goodbye!");
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please select a valid option.");
            }
        }
    }

    public static void listTasks(ArrayList<String> tasks) {
        System.out.println("Daily Tasks:");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
    }

    public static void addTask(Scanner scanner, ArrayList<String> tasks) {
        System.out.print("Enter a new task: ");
        String newTask = scanner.nextLine();
        tasks.add(newTask);
        System.out.println("Task added: " + newTask);
    }

    public static void removeTask(Scanner scanner, ArrayList<String> tasks) {
        if (tasks.isEmpty()) {
            System.out.println("No tasks to remove.");
            return;
        }

        listTasks(tasks);
        System.out.print("Enter the task number to remove: ");
        int taskNumber = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        if (taskNumber >= 1 && taskNumber <= tasks.size()) {
            String removedTask = tasks.remove(taskNumber - 1);
            System.out.println("Task removed: " + removedTask);
        } else {
            System.out.println("Invalid task number. Please enter a valid task number.");
        }
    }
}
