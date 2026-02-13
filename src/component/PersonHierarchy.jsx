import React from "react";
import "./PersonHierarchy.css";

/* =========================
   Base Class
========================= */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}`;
  }
}

/* =========================
   Student Class (Inheritance)
========================= */
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method Overriding
  getDetails() {
    return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

/* =========================
   Teacher Class (Inheritance)
========================= */
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  getDetails() {
    return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

function PersonHierarchy() {
  // Polymorphism (All stored as Person type reference)
  const people = [
    new Person("Rahul", 30),
    new Student("Ananya", 20, "A"),
    new Teacher("Mr. Sharma", 45, "Mathematics")
  ];
  return (
  <div className="person-container">
  <h1>Person Class Hierarchy</h1>

  <div className="person-card">
    <h3>Alex Johnson (Person)</h3>
    <p>Age: 30</p>
    <p className="person-description">
      Hello, my name is Alex Johnson.
    </p>
  </div>

  <div className="person-card">
    <h3>Emma Watson (Student)</h3>
    <p>Age: 20</p>
    <p className="person-description">
      Hello, my name is Emma Watson and I'm studying Computer Science.
    </p>
    <p className="extra-info">Major: Computer Science</p>
  </div>

  <div className="person-card">
    <h3>Dr. James Wilson (Teacher)</h3>
    <p>Age: 45</p>
    <p className="person-description">
      Hello, my name is Dr. James Wilson and I teach Mathematics.
    </p>
    <p className="extra-info">Teaching: Mathematics</p>
  </div>
</div>
  );
}

export default PersonHierarchy;
