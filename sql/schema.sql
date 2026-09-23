DROP TABLE IF EXISTS TodoItems;
CREATE TABLE TodoItems (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP DEFAULT NULL
);
INSERT INTO TodoItems (title, description, completed) VALUES
('Buy groceries', 'Milk, Bread, Eggs, Cheese', FALSE),
('Finish project report', 'Complete the final draft of the project report', TRUE),
('Call plumber', 'Fix the leaking sink in the kitchen', FALSE),
('Schedule dentist appointment', 'Routine check-up and cleaning', TRUE),
('Plan weekend trip', 'Decide on destination and book accommodations', FALSE);
