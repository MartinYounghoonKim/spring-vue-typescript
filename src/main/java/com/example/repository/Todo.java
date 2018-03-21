package com.example.repository;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "todo")
@EqualsAndHashCode(of = "id")
public class Todo {
    @Id
    @JsonProperty
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonProperty
    @Column(nullable = false)
    private String text;

    @JsonProperty
    @Column
    private boolean completed;

    public Todo() {}

    public Todo(String text) {
        this.text = text;
        this.completed = false;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", completed=" + completed +
                '}';
    }
}
