package de.beyondjava.travel.expenses;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:4206" })
public interface ExpenseRepository extends PagingAndSortingRepository<Expense, Long> {

  List<Expense> findByHotel(String hotel);

  List<Expense> findByHotelAndAmount(String hotel, double amount);
}
