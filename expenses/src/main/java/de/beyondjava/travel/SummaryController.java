package de.beyondjava.travel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class SummaryController {

    @Autowired private Greeting greeting;

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/summary")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name,
                             @RequestParam(value = "bla", defaultValue = "Bla") String bla) {
        this.greeting.setId(counter.incrementAndGet() * counter.incrementAndGet());
        this.greeting.setContent(String.format(template, name  + bla)+"!   !");
        return greeting;
    }
}

