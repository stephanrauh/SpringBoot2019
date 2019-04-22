package de.beyondjava.travel.expenses;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ExpenseRepository extends PagingAndSortingRepository<Expense, Long> {

    List<Expense> findByHotel(String hotel);

    List<Expense> findByHotelAndAmount(String hotel, double amount);
}