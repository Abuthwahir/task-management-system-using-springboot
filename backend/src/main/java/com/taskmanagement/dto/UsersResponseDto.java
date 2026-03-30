package com.taskmanagement.dto;

import com.taskmanagement.entity.User;
import java.util.List;
import lombok.Data;

@Data
public class UsersResponseDto extends CommonApiResponse {

  private List<User> users;
}
