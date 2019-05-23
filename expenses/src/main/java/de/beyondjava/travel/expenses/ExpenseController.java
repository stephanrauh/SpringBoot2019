package de.beyondjava.travel.expenses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = { "http://localhost:4206" })
public class ExpenseController {

  @Autowired
  private ExpenseRepository repository;

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
