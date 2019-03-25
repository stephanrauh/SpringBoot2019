import java.util.List;

import de.beyondjava.travel.expenses.Expense;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface ExpenseRepository extends PagingAndSortingRepository<Expense, Long> {

    List<Expense> findByLastName(@Param("name") String name);

}