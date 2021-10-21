import React from "react";
import styles from "./styles.module.scss";

const KEY_KODES = {
  ENTER: "Enter",
  SPACE: " ",
  DOWN_ARROW: "ArrowDown",
  UP_ARROW: "ArrowUp",
  ESCAPE: "Escape",
};

const Dropdown = ({
  options = [],
  label = "Please select an option",
  onOptionSelected,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  /**
   * move between options with keyboard 1
   */
  const [highlightedIndex, setHighlightedIndex] = React.useState(null);
  const [optionsRefs, setOptionRefs] = React.useState([]);

  React.useEffect(() => {
    setOptionRefs(options.length > 0 && options.map((_) => React.createRef()));
  }, [options.length]);

  /**
   * calculate height of the button
   */
  const labelRef = React.useRef(null);
  const [overlayTop, setOverlayTop] = React.useState(0);

  React.useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  /**
   * Options
   */
  const onOptionClicked = (option, index) => {
    if (onOptionSelected) {
      onOptionSelected(option, index);
    }
    setSelectedIndex(index);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };
  /**
   * move between options with keyboard 2
   */
  const getNextOptionIndex = (currentOptionIndex, options) => {
    if (currentOptionIndex === null) {
      return 0;
    }
    if (currentOptionIndex === options.length - 1) {
      return 0;
    }
    return currentOptionIndex + 1;
  };
  const getPreviousOptionIndex = (currentOptionIndex, options) => {
    if (currentOptionIndex === null) {
      return 0;
    }
    if (currentOptionIndex === 0) {
      return options.length - 1;
    }
    return currentOptionIndex - 1;
  };
  //styles for focus and selected using refs
  React.useEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      let ref = optionsRefs[highlightedIndex];
      if (ref && ref.current) {
        ref.current.focus();
      }
      if (selectedIndex !== null && isOpen) {
        ref = optionsRefs[selectedIndex];
        if (ref && ref.current) {
          ref.current.focus();
        }
      }
    }
  }, [isOpen, highlightedIndex, selectedIndex]);

  const higlightOption = (index) => {
    setHighlightedIndex(index);
  };
  const onButtonKeyDown = (event) => {
    event.preventDefault();
    if (
      [KEY_KODES.ENTER, KEY_KODES.DOWN_ARROW, KEY_KODES.SPACE].includes(
        event.key
      )
    ) {
      setIsOpen(true);
      //set focus on the list item
      higlightOption(selectedIndex || 0);
    }
  };
  const onOptionKeyDown = (event) => {
    if (event.key === KEY_KODES.ESCAPE) {
      setIsOpen(false);
      return;
    }
    if (event.key === KEY_KODES.DOWN_ARROW) {
      const nextOptionIndex = getNextOptionIndex(highlightedIndex, options);
      higlightOption(nextOptionIndex);
    }
    if (event.key === KEY_KODES.UP_ARROW) {
      const previousOptionIndex = getPreviousOptionIndex(
        highlightedIndex,
        options
      );
      higlightOption(previousOptionIndex);
    }
    if (event.key === KEY_KODES.ENTER) {
      if (highlightedIndex !== null) {
        onOptionClicked(options[highlightedIndex], highlightedIndex);
      }
    }
  };
  let selectedOption = null;
  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex].label;
  }

  return (
    <div className={styles.dseSelect}>
      <button
        data-testid="DseSelectButton"
        className={styles.dseSelectLabel}
        onClick={onLabelClick}
        onKeyDown={onButtonKeyDown}
        //to calculate the height of the button for the overlay position
        ref={labelRef}
      >
        {selectedIndex === null ? label : selectedOption}
      </button>
      {isOpen && (
        <ul style={{ top: overlayTop }} className={styles.dseSelectOverlay}>
          {options.length > 0 &&
            options.map((option, i) => {
              const isSelected = selectedIndex === i;
              const isHighLighted = highlightedIndex === i;
              /**
               * add refs for keybord moving
               */
              const ref = optionsRefs[i];

              const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                  return {
                    ref,
                    key: option.label,
                    //https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                    tabIndex: isHighLighted ? -1 : 0,
                    className: `${styles.dseSelectOption} ${
                      isSelected ? styles.dseSelectOptionSelected : ""
                    } ${
                      isHighLighted ? styles.dseSelectOptionHighlighted : ""
                    }`,
                    onClick: () => onOptionClicked(option, i),
                    //control highlighted еlement with state NOT mouse hover
                    onMouseEnter: () => {
                      higlightOption(i);
                    },
                    onMouseLeave: () => {
                      higlightOption(null);
                    },
                    onKeyDown: onOptionKeyDown,

                    //additional props
                    ...overrideProps,
                  };
                },
              };

              return (
                <li {...renderOptionProps.getOptionRecommendedProps()}>
                  {option.label}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
