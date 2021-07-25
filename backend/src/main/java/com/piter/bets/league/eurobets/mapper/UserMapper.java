package com.piter.bets.league.eurobets.mapper;

import com.piter.bets.league.eurobets.dto.UserDTO;
import com.piter.bets.league.eurobets.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

  UserDTO toUserDTO(User user);
}
