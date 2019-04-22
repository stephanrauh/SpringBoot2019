package de.beyondjava.travel.expenses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class ExpenseController {

    @Autowired private ExpenseRepository repository;

    @GetMapping("/addExpense")
    public String addExpense() {
        Expense first = new Expense();
        first.setHotel("Grand Hotel");
        first.setAmount(450);
        repository.save(first);

        Expense second = new Expense();
        second.setHotel("Petit Hotel");
        second.setAmount(1777);
        repository.save(second);

        return "Success";
    }

    @GetMapping("/addExpenseTransactional")
    @Transactional
    public String addExpenseTransactional() {
        Expense first = new Expense();
        first.setHotel("Grand Hotel");
        first.setAmount(450);
        repository.save(first);

        Expense second = new Expense();
        second.setHotel("Petit Hotel");
        second.setAmount(1777);
        repository.save(second);

        return "Success";
    }

}

