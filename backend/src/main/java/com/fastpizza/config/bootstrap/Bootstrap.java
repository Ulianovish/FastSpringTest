package com.fastpizza.config.bootstrap;

import com.fastpizza.domain.model.Crust;
import com.fastpizza.domain.model.Pizza;
import com.fastpizza.domain.model.Topping;
import com.fastpizza.domain.model.Sauce;
import com.fastpizza.domain.model.Size;

import com.fastpizza.domain.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class Bootstrap implements CommandLineRunner {

    private final CrustRepository crustRepository;
    private final SauceRepository sauceRepository;
    private final SizeRepository sizeRepository;
    private final ToppingRepository toppingRepository;
    private final PizzaRepository pizzaRepository;

    @Autowired
    public Bootstrap(CrustRepository crustRepository, SauceRepository sauceRepository,
                          SizeRepository sizeRepository, ToppingRepository toppingRepository,
                          PizzaRepository pizzaRepository) {
        this.crustRepository = crustRepository;
        this.sauceRepository = sauceRepository;
        this.sizeRepository = sizeRepository;
        this.toppingRepository = toppingRepository;
        this.pizzaRepository = pizzaRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Seed the database with initial data
        seedCrusts();
        seedSauces();
        seedSizes();
        seedToppings();
        seedPizzas();
    }

    private void seedCrusts() {
        if (crustRepository.count() == 0) {
            // Create and save initial crusts
            List<Crust> initialCrusts = Arrays.asList(
                new Crust("THIN", 12),
                new Crust("PAN", 12),
                new Crust("FLATBREAD", 12),
                new Crust("CAULIFLOWER", 12),
                new Crust("CHEESY", 12),
                new Crust("HAND-TOSSED", 12)
            );

            crustRepository.saveAll(initialCrusts);

        }
    }

    private void seedSauces() {
        if (sauceRepository.count() == 0) {
            List<Sauce> initialSauces = Arrays.asList(
                new Sauce("MARINARA", 12),
                new Sauce("ALFREDO", 12),
                new Sauce("BBQ", 12),
                new Sauce("BUFFALO", 12),
                new Sauce("GARLIC BUTTER", 12),
                new Sauce("PESTO", 12)
            );

            sauceRepository.saveAll(initialSauces);
        }
    }

    private void seedSizes() {
        if (sizeRepository.count() == 0) {
            // Create and save initial Sizes
            List<Size> initialSizes = Arrays.asList(
                new Size("SMALL", 0),
                new Size("MEDIUM", 7),
                new Size("LARGE", 12),
                new Size("EXTRA LARGE", 12)
            );

            sizeRepository.saveAll(initialSizes);
        }
    }

    private void seedToppings() {
        if (toppingRepository.count() == 0) {
            // Create and save initial toppings
            List<Topping> initialToppings = Arrays.asList(
                new Topping("ONION", 10, "veg", "onion.png"),
                new Topping("MUSHROOM", 10, "veg", "mushroom.png"),
                new Topping("PANEER", 10, "veg", "paneer.png"),
                new Topping("GOLDEN CORN", 10, "veg", "greenOlives.png"),
                new Topping("GREEN OLIVES", 10, "veg", "goldenCorn.png"),
                new Topping("CAPSICUM", 10, "veg", "capsicum.png"),
                new Topping("PERI PERI CHICKEN", 10, "meat", "peri-peri-chicken.png"),
                new Topping("BARBEQUE", 10, "meat", "barbeque.png"),
                new Topping("SAUSAGE", 10, "meat", "chicken-sausage.png"),
                new Topping("CHICKEN TIKKA", 10, "meat", "chicken-tikka.png"),
                new Topping("GRILLED CHICKEN RASHER", 10, "meat", "grilled-chicken-rasher.png")
            );

            toppingRepository.saveAll(initialToppings);
        }
    }

    private void seedPizzas() {
        if (pizzaRepository.count() == 0) {
            // Create and save initial pizzas
            List<Pizza> initialPizzas = Arrays.asList(
                new Pizza("Cheese", 12, "cheese.png", null, null, null, null),
                new Pizza("BBQ Chicken", 12, "BBQ_chicken", null, null, null, null),
                new Pizza("Cheeseburger", 12, "cheeseburger.png", null, null, null, null),
                new Pizza("Crazy Pepperoni", 12, "crazy_Pepperoni.png", null, null, null, null),
                new Pizza("Four Seasons", 12, "four_seasons.png", null, null, null, null),
                new Pizza("Margarita", 12, "margarita.png", null, null, null, null),
                new Pizza("Pepperoni With Pepper", 12, "pepperoni_with_pepper.png", null, null, null, null),
                new Pizza("Pepperoni", 12, "pepperoni.png", null, null, null, null),
                new Pizza("Sweet And Sour Chicken", 12, "sweet_and_sour_chicken.png", null, null, null, null),
                new Pizza("Vegetables And Mushrooms", 12, "vegetables_and_mushrooms.png", null, null, null, null)
            );

            pizzaRepository.saveAll(initialPizzas);
        }
    }
}