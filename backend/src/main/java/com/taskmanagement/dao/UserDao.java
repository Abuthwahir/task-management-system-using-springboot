package com.taskmanagement.dao;

import com.taskmanagement.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

  User findByEmailIdAndPassword(String emailId, String password);

  User findByEmailIdAndPasswordAndRole(String emailId, String password, String role);

  User findByEmailIdAndRole(String emailId, String role);

  User findByEmailId(String emailId);

  List<User> findByRoleAndStatus(String role, int status);
}
