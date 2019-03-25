package de.beyondjava.travel.expenses;

import java.util.List;

import de.beyondjava.travel.expenses.Expense;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "expense", path = "expense")
public interface ExpenseRepository extends PagingAndSortingRepository<Expense, Long> {

    Expense save(Expense expense);

    List<Expense> findByHotel(@Param("hotel") String hotel);

    List<Expense> findAll();

    List<Expense> findAll(Sort var1);

    Page<Expense> findAll(Pageable var1);

}