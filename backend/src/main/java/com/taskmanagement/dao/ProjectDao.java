package com.taskmanagement.dao;

import com.taskmanagement.entity.Project;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectDao extends JpaRepository<Project, Integer> {

  List<Project> findByNameContainingIgnoreCase(String projectName);

  List<Project> findByNameContainingIgnoreCaseAndEmployeeId(String projectName, int employee);

  List<Project> findByNameContainingIgnoreCaseAndManagerId(String projectName, int managerId);

  List<Project> findByEmployeeId(int employeeId);

  List<Project> findByManagerId(int managerId);
}
