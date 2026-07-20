import java.util.Scanner;

class DateClass {
    private int date;
    private int month;
    private int year;

    private int days[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

    public DateClass(int date, int month, int year) {
        this.date = date;
        this.month = month;
        this.year = year;
    }

    public DateClass() {

    }

    public void setDate(int date) {
        this.date = date;
    }

    public int getDate() {
        return this.date;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getMonth() {
        return this.month;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getYear() {
        return this.year;
    }

    public int compareTwoDate(DateClass dc2) { // dc1    22/01/2025  22/02/2025
        if (dc2.year != this.year)
            return dc2.year < this.year ? 1 : -1;

        if (dc2.month != this.month)
            return dc2.month < this.month ? 1 : -1;

        if (dc2.date != this.date)
            return dc2.date < this.date ? 1 : -1;

        return 0;
    }

    public boolean validateDate(int date, int month, int year) {

        if (year <= 0 || month < 1 || month > 12 || date < 1)
            return false;

        if (month == 2 && isLeapYear(year)) { // handle february
            if (date <= 29) {
                return true;
            } else {
                return false;
            }
        }

        return date <= days[month - 1];
    }

    public void displayDDMMYYYY(DateClass dc) {
        System.out.print(dc.date + "/" + dc.month + "/" + dc.year + " ");
    }

    public void displayMMDDYYYY(DateClass dc) {
        System.out.print(dc.month + "/" + dc.date + "/" + dc.year + " ");
    }

    public int getDays(DateClass dc) {

        int totalDays = 0;

        for (int i = 0; i < dc.month - 1; i++) {
            totalDays += days[i];
        }
        totalDays += dc.date;

        if (dc.month > 2 && isLeapYear(dc.year)) {
            totalDays++;
        }

        return totalDays;
    }

    public boolean isLeapYear(int year) {
        if (year % 400 == 0) {
            return true;
        }
        if (year % 100 == 0) {
            return false;
        }
        return year % 4 == 0;
    }

}

public class DateClassTest {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        DateClass dc = new DateClass();

        // System.out.println("Enter first date:: ");
        int date1 = sc.nextInt();
        int month1 = sc.nextInt();
        int year1 = sc.nextInt();

        if (!dc.validateDate(date1, month1, year1)) {
            System.out.println("INVALID DATE");
            return;
        }

        DateClass dc1 = new DateClass(date1, month1, year1);

        // System.out.println("Enter Second date:: ");
        int date2 = sc.nextInt();
        int month2 = sc.nextInt();
        int year2 = sc.nextInt();

        if (!dc.validateDate(date2, month2, year2)) {
            System.out.println("INVALID DATE");
            return;
        }

        DateClass dc2 = new DateClass(date2, month2, year2);

        int c = dc1.compareTwoDate(dc2);

        dc.displayDDMMYYYY(dc1);
        dc.displayMMDDYYYY(dc2);

        System.out.print(c + " ");
        int countDaysOfDate1 = dc2.getDays(dc1);
        int countDaysOfDate2 = dc.getDays(dc2);
        System.out.print(countDaysOfDate1 + " ");
        System.out.print(countDaysOfDate2);

        sc.close();

    }
}