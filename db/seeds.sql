INSERT INTO departments (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Legal'),
  ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Lead Engineer', 150000, 1),
  ('Software Engineer', 100000, 1),
  ('Engineering Intern', 55000, 1),
  ('Head Salesman', 200000, 2),
  ('Salesman', 135000, 2),
  ('Legal Lead', 450000, 3),
  ('Lawyer', 250000, 3),
  ('Legal Aide', 45000, 3),
  ('HR Manager', 95000, 4),
  ('HR Representative', 67000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Shashi', 'Steffen', 1, NULL),
  ('Rhian', 'Shwetz', 2, 1),
  ('Nuria', 'Ventura', 2, 1),
  ('Gurutz', 'Linna', 3, 3),
  ('Kristijan', 'Hummel', 4, NULL),
  ('Raguel', 'Veronesi', 5, 5),
  ('Amit', 'Kaneko', 5, 5),
  ('Zsofika', 'Lyon', 6, NULL),
  ('Isabella', 'Stevens', 7, 8),
  ('Hendrix', 'Donaghue', 7, 8),
  ('Maja', 'Akkermans', 8, 9),
  ('Ayaz', 'Paine', 8, 10),
  ('Kelley', 'Filipovic', 9, NULL),
  ('Peronel','Schneijder', 10, 13),
  ('Alexandra', 'Bartolomei', 10, 13);
